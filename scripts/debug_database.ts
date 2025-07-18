import { db } from '@/drizzle/db'; // Adjust path to your database instance
import { navLinks, subLinks, nestedLinks } from '@/drizzle/schema'; // Adjust path to your schema
//import path from 'path';
import fs from 'fs';

async function checkTables() {
  console.log('🔍 Checking database tables...\n');
  
  try {
    // Check if tables exist by trying to query them
    console.log('Checking navLinks table...');
    const navLinksResult = await db.select().from(navLinks);
    console.log(`✓ navLinks table exists with ${navLinksResult.length} records`);
    
    console.log('Checking subLinks table...');
    const subLinksResult = await db.select().from(subLinks);
    console.log(`✓ subLinks table exists with ${subLinksResult.length} records`);
    
    console.log('Checking nestedLinks table...');
    const nestedLinksResult = await db.select().from(nestedLinks);
    console.log(`✓ nestedLinks table exists with ${nestedLinksResult.length} records`);
    
    return true;
  } catch (error) {
    console.error('❌ Table check failed:', error);
    console.log('\n💡 This might mean:');
    console.log('1. Tables haven\'t been created yet (run migrations first)');
    console.log('2. Database connection is not working');
    console.log('3. Schema path is incorrect');
    return false;
  }
}

async function showExistingData() {
  console.log('\n📋 Existing navigation data:\n');
  
  try {
    const navData = await db.select().from(navLinks);
    
    if (navData.length === 0) {
      console.log('No navigation data found');
      return;
    }
    
    for (const nav of navData) {
      console.log(`📁 ${nav.name} (${nav.slug})`);
      
      // Get sub-links
      const subs = await db.select().from(subLinks).where(eq(subLinks.parentId, nav.id));
      
      for (const sub of subs) {
        console.log(`  📂 ${sub.name} (${sub.slug})`);
        
        // Get nested links
        const nested = await db.select().from(nestedLinks).where(eq(nestedLinks.parentId, sub.id));
        
        for (const nest of nested) {
          console.log(`    📄 ${nest.name} (${nest.slug})`);
        }
      }
    }
  } catch (error) {
    console.error('❌ Error showing existing data:', error);
  }
}

async function checkDatabaseFile() {
  console.log('🗄️ Checking database file...\n');
    // Common SQLite database paths
    const possiblePaths = [
      './database.db',
      './db.sqlite',
      './sqlite.db',
      './dev.db',
      './database.sqlite',
      './src/lib/database.db',
      './src/database.db'
    ];
    
    for (const dbPath of possiblePaths) {
      if (fs.existsSync(dbPath)) {
        const stats = fs.statSync(dbPath);
        console.log(`✓ Found database file: ${dbPath}`);
        console.log(`  Size: ${stats.size} bytes`);
        console.log(`  Modified: ${stats.mtime}`);
        return dbPath;
      }
    }
    
    console.log('❌ No database file found in common locations');
    console.log('💡 Your database might be in a different location');
  return null;
  return null;
}

async function main() {
  console.log('🔧 Database Debug Tool\n');
  
  // Check database file
  await checkDatabaseFile();
  
  // Check tables
  const tablesOk = await checkTables();
  
  if (tablesOk) {
    // Show existing data
    await showExistingData();
  }
  
  console.log('\n🏁 Debug complete!');
}

// Import eq function
import { eq } from 'drizzle-orm';

// Execute when run directly
if (require.main === module) {
  main()
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error('Debug failed:', error);
      process.exit(1);
    });
}