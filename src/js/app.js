export default class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
    if ((typeof (this.name) !== 'string') && this.name.length < 2 && this.name.length > 10) {
      throw new Error('Ошибка. Имя не может быть таким ');
    }
    if (this.type !== 'Bowman' && this.type !== 'Swordsman' && this.type !== 'Magician' && this.type !== 'Daemon' && this.type !== 'Undead' && this.type !== 'Zombie') {
      throw new Error('Ошибка. Не верно выбран тип');
    }
  }
}

export class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman', 100, 1, 25, 25);
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman', 100, 1, 40, 10);
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician', 100, 1, 10, 40);
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon', 100, 1, 10, 40);
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead', 100, 1, 25, 25);
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie', 100, 1, 40, 10);
  }
}
