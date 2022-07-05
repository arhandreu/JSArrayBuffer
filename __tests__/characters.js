import Daemon from '../src/characters';

const hero = new Daemon('andrew');

test('setAttack', () => {
  hero.attack = 100;
  expect(hero.attack).toBe(100);
});

test.each([
  [4, false, 70],
  [4, true, 60],
])('Вычисление атаки на %s клеток, со статусом %s', (distance, stoned, expected) => {
  hero.stoned = stoned;
  hero.distance = distance;
  expect(hero.attack).toBe(expected);
});
