
const rhyme = [
  'This is the house that Jack built.',
  '',
  'This is the malt',
  'that lay in the house that Jack built.',
  '',
  'This is the rat',
  'that ate the malt',
  'that lay in the house that Jack built.',
  '',
  'This is the cat',
  'that killed the rat',
  'that ate the malt',
  'that lay in the house that Jack built.',
  '',
  'This is the dog',
  'that worried the cat',
  'that killed the rat',
  'that ate the malt',
  'that lay in the house that Jack built.',
  '',
  'This is the cow with the crumpled horn',
  'that tossed the dog',
  'that worried the cat',
  'that killed the rat',
  'that ate the malt',
  'that lay in the house that Jack built.',
  '',
  'This is the maiden all forlorn',
  'that milked the cow with the crumpled horn',
  'that tossed the dog',
  'that worried the cat',
  'that killed the rat',
  'that ate the malt',
  'that lay in the house that Jack built.',
  '',
  'This is the man all tattered and torn',
  'that kissed the maiden all forlorn',
  'that milked the cow with the crumpled horn',
  'that tossed the dog',
  'that worried the cat',
  'that killed the rat',
  'that ate the malt',
  'that lay in the house that Jack built.',
  '',
  'This is the priest all shaven and shorn',
  'that married the man all tattered and torn',
  'that kissed the maiden all forlorn',
  'that milked the cow with the crumpled horn',
  'that tossed the dog',
  'that worried the cat',
  'that killed the rat',
  'that ate the malt',
  'that lay in the house that Jack built.',
  '',
  'This is the rooster that crowed in the morn',
  'that woke the priest all shaven and shorn',
  'that married the man all tattered and torn',
  'that kissed the maiden all forlorn',
  'that milked the cow with the crumpled horn',
  'that tossed the dog',
  'that worried the cat',
  'that killed the rat',
  'that ate the malt',
  'that lay in the house that Jack built.',
  '',
  'This is the farmer sowing his corn',
  'that kept the rooster that crowed in the morn',
  'that woke the priest all shaven and shorn',
  'that married the man all tattered and torn',
  'that kissed the maiden all forlorn',
  'that milked the cow with the crumpled horn',
  'that tossed the dog',
  'that worried the cat',
  'that killed the rat',
  'that ate the malt',
  'that lay in the house that Jack built.',
  '',
  'This is the horse and the hound and the horn',
  'that belonged to the farmer sowing his corn',
  'that kept the rooster that crowed in the morn',
  'that woke the priest all shaven and shorn',
  'that married the man all tattered and torn',
  'that kissed the maiden all forlorn',
  'that milked the cow with the crumpled horn',
  'that tossed the dog',
  'that worried the cat',
  'that killed the rat',
  'that ate the malt',
  'that lay in the house that Jack built.',
]
export class House {
  static count = 1;
  static lastQuoteIndex = 0;
  static groupsOfRhyme = rhyme.reduce((acc, item, index, list) => {
    if (item === '') {
      House.lastQuoteIndex = House.lastQuoteIndex !== 0 ? House.lastQuoteIndex + 1 : House.lastQuoteIndex;
      acc[House.count] = rhyme.slice(House.lastQuoteIndex, index);
      House.lastQuoteIndex = index;
      House.count++;
    }
    if (index === list.length - 1) {
      acc[House.count] = rhyme.slice(House.lastQuoteIndex + 1, list.length);
    }
    return acc;
  }, {})

  static verse(n) {
    return House.groupsOfRhyme[n];
  }

  static verses(start, end) {
    return Object.entries(House.groupsOfRhyme)
      .filter(([key, value]) => key >= start && key <= end)
      .flatMap(([key, value], i, list) => {
        if (i === list.length - 1) {
          return value;
        }
        return [...value, '']
    });
  }
}



