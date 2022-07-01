import Daemon from '../src/characters';



test.each([
    [4, false, 7],
    [2, true, 5],    
  ])('Вычисление атаки на %s клеток, со статусом %s', (countSquare, stoned, expected) => {
    const hero = new Daemon('andrew')
    hero.stoned = stoned
    hero.attack = countSquare
    expect(hero.attack).toBe(expected)
  });
  
  test('statusStoned', () => {
    const hero = new Daemon('andrew')
    const status = false;
    expect(hero.stoned).toBe(status);
  });