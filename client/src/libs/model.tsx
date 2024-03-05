export class Clinic {
    id: number | undefined;
    name: string | undefined;
  }
  
  export class Patient {
    id: number | undefined;
    clinic: Clinic | undefined;
    first_name: string | undefined;
    last_name: string | undefined;
    date_of_birth: string | undefined;
  }
  