import Character, {
  Bowman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../app';

test('type Bowman', () => {
  const newGamer = new Bowman('Sam', 'Bowman');
  const result = 'Bowman';
  expect(newGamer.type).toBe(result);
});

test('type Swordsman', () => {
  const newGamer = new Swordsman('John', 'Swordsman');
  const result = 'Swordsman';
  expect(newGamer.type).toBe(result);
});

test('type Magician', () => {
  const newGamer = new Magician('Pavel', 'Magician');
  const result = 'Magician';
  expect(newGamer.type).toBe(result);
});

test('type Daemon', () => {
  const newGamer = new Daemon('Tom', 'Daemon');
  const result = 'Daemon';
  expect(newGamer.type).toBe(result);
});

test('type Undead', () => {
  const newGamer = new Undead('Mike', 'Undead');
  const result = 'Undead';
  expect(newGamer.type).toBe(result);
});

test('type Zombie', () => {
  const newGamer = new Zombie('Rick', 'Zombie');
  const result = 'Zombie';
  expect(newGamer.type).toBe(result);
});

test('name', () => {
  const newGamer = new Swordsman('Ann');
  const result = 'Ann';
  expect(newGamer.name).toBe(result);
});
