class Key {
	private signature = Math.random();

	getSignature() {
		return this.signature;
	}
}
class Person {
	constructor(private key: Key){};

	getKey() {
		return this.key;
	}
}

abstract class House{
protected door = false;
public key: Key;
public tenants: Person[] = [];

public abstract openDoor(key: Key): void;

comeIn(tenant: Person){
	if(this.door === true) {
	this.tenants.push(tenant);
	}
}
}

class MyHouse extends House {
	constructor(key){
		super();
	}
openDoor(key){
if(key === this.key){
	this.door = true;
};
};
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};