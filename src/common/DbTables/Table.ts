class Table<T extends { id: string }> {
    records: T[];
  
    constructor(records: T[]) {
      this.records = records;
    }
  
    getAll = async (): Promise<T[]> => this.records;
  
    get = async (id: string):Promise<T|undefined> =>
      this.records.find((record: T) => record.id === id);
  
    create = async (record: T):Promise<T|undefined> => {
      this.records.push(record);
      return this.get(record.id);
    };
  
    remove = async (id: string):Promise<void> => {
      this.records = this.records.filter((record) => record.id !== id);
    };
  
    update = async (record: T): Promise<T|undefined> => {
      this.remove(record.id);
      this.create(record);
      return this.get(record.id);
    };
  }

  export default Table;