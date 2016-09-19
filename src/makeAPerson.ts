export class Person {

    constructor(fullName: string) {
        this.fullName = fullName;
        this.getFirstName();
    }

    fullName: string;

    getFirstName(): string {
        return this.fullName.split(" ")[0];
    }

    getLastName(): string {
        return this.fullName.split(" ")[1];
    }

    getFullName(): string {
        return this.fullName;
    }

    setFirstName(firstName: string) {
        this.fullName = firstName + " " + this.fullName.split(" ")[1];
    }
    setLastName(lastName: string) {
        this.fullName = this.fullName.split(" ")[0] + " " + lastName;
    }
    setFullName(newFullName: string) {
        this.fullName = newFullName.split(" ")[0] + " " + newFullName.split(" ")[1];
    }


}