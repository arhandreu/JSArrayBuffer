class Character {
  constructor(name, type, level = 1, health = 100, attack = 0, defence = 0) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.health = health;
    this._attack = attack;
    this.defence = defence;
    this._stoned = false;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    return this._attack;
  }

  set attack(countSquare = 1) {
    if (!this._stoned) {
      this._attack *= (1 - 0.1 * (countSquare - 1));
    } else {
      this._attack -= Math.log2(countSquare) * 5;
    }
  }
}

export default class Daemon extends Character {
  constructor(name, type = 'Daemon', level = 1, health = 100, attack = 10, defence = 40) {
    super(name, type, level, health, attack, defence);
  }
}
