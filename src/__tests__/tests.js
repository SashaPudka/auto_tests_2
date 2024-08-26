import  {statusPlayer} from '../statusPlayer'

  test('comparison of results', () => {
    const initial = [
      {name: 'мечник', health: 10},
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
    ];
  
    const result = [
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 10},
    ];
    
    expect(statusPlayer(initial)).toEqual(result);
  });
