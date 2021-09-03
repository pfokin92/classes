let typeArray = [ 'Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if ((typeof (name) !== 'string') || name.length < 2 || name.length > 10) {
      throw new Error('Ошибка. Имя не может быть таким ');
    } else {
      this.name = name;
    }
    if (typeArray.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Ошибка. Не верно выбран тип');
    }
    this.health = 100;
    this.level = 1;
  }
}
