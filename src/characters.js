class Character {
  constructor(name, type, level = 1, health = 100, attack = 0, defence = 0) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.health = health;
    this._attack = attack;
    this.defence = defence;
    this.stoned = false;
    this.distance = 1;
  }

  get attack() {
    let attack = this._attack;
    if (!this.stoned) {
      attack *= (1 - 0.1 * (this.distance - 1));
    } else {
      attack = attack * (1 - 0.1 * (this.distance - 1)) - Math.log2(this.distance) * 5;
    }
    return Math.round(attack);
  }

  set attack(attack) {
    this._attack = attack;
  }
}

export default class Daemon extends Character {
  constructor(name, type = 'Daemon', level = 1, health = 100, attack = 10, defence = 40) {
    super(name, type, level, health, attack, defence);
  }
}
