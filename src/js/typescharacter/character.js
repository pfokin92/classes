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

