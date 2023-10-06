class Key {
	private signature = Math.random();

	getSignature(): number {
		return this.signature;
	}
}
class Person {
	constructor(private key: Key){};

	getKey(): Key {
		return this.key;
	}
}

abstract class House{
protected door = false;
protected key: Key;
private tenants: Person[] = [];

public abstract openDoor(key: Key): void;

constructor(key: Key){}

comeIn(tenant: Person): void{
	if(this.door) {
	this.tenants.push(tenant);
	}
}
}

class MyHouse extends House {
openDoor(key): void {
	if(key.getSignature() === this.key){
		this.door = true;
	}
}
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};