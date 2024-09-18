import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method to add content to the database
export const putDb = async (content) => {
  console.log('PUT to the database');

  // Open a connection to the database and specify the version
  const jateDb = await openDB('jate', 1);

  // Create a transaction and specify the database and data privileges
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open the desired object store
  const store = tx.objectStore('jate');

  // Use the .add() method to pass in the content
  const request = store.put({ id: 1, content });

  // Confirm the request
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// Method to get all the content from the database
export const getDb = async () => {
  console.log('GET from the database');

  // Open a connection to the database
  const jateDb = await openDB('jate', 1);

  // Create a transaction and specify the database and data privileges
  const tx = jateDb.transaction('jate', 'readonly');

  // Open the desired object store
  const store = tx.objectStore('jate');

  // Use the .getAll() method to get all data in the store
  const request = store.get(1); // We use `get(1)` to fetch by the primary key since we're using autoIncrement

  // Confirm the request
  const result = await request;
  result ? console.log('🚀 - data retrieved from the database', result.content) : console.log('🚀 - data not found in the database');
  
  return result?.content;
};

initdb();
