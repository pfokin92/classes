import Character from "../typescharacter/character";

test('name', () => {
  const newGamer = new Character('Ann','Bowman');
  const result = 'Ann';
  expect(newGamer.name).toBe(result);
});

test('name Error', () => {
  const newGamer = new Character ('', 'Bowman');
  const result = new Error ('Ошибка. Имя не может быть таким ');
  expect(newGamer.name).toBe(result);
})
test('type Error', () => {
  const newGamer = new Character ('Ann', 'Man');
  const result = new Error ('Ошибка. Не верно выбран тип');
  expect(newGamer.type).toBe(result);
})


