import { mapTopics } from './mapper';

const sampleInput = [
  {
    id: '1751295897__Berlin',
    label: 'Berlin',
    volume: 165,
    type: 'topic',
    sentiment: {
      negative: 3,
      neutral: 133,
      positive: 29
    },
    sentimentScore: 65,
    burst: 13,
    days: [
      {
        date: '2014-06-06T00:00:00.000+0000',
        volume: 22
      },
      {
        date: '2014-06-04T00:00:00.000+0000',
        volume: 43
      },
      {
        date: '2014-06-09T00:00:00.000+0000',
        volume: 0
      },
      {
        date: '2014-06-07T00:00:00.000+0000',
        volume: 12
      },
      {
        date: '2014-06-08T00:00:00.000+0000',
        volume: 11
      },
      {
        date: '2014-06-03T00:00:00.000+0000',
        volume: 39
      },
      {
        date: '2014-06-05T00:00:00.000+0000',
        volume: 38
      }
    ],
    pageType: {
      blog: 17,
      facebook: 56,
      forum: 22,
      general: 5,
      image: 0,
      news: 26,
      review: 1,
      twitter: 35,
      video: 3
    },
    queries: [
      {
        id: 1751295897,
        name: 'Berghain',
        volume: 165
      }
    ]
  },
  {
    id: '1751295897__DJ',
    label: 'DJ',
    volume: 48,
    type: 'topic',
    sentiment: {
      neutral: 46,
      positive: 2
    },
    sentimentScore: 54,
    burst: 29,
    days: [
      {
        date: '2014-06-06T00:00:00.000+0000',
        volume: 4
      },
      {
        date: '2014-06-04T00:00:00.000+0000',
        volume: 10
      },
      {
        date: '2014-06-09T00:00:00.000+0000',
        volume: 0
      },
      {
        date: '2014-06-07T00:00:00.000+0000',
        volume: 11
      },
      {
        date: '2014-06-08T00:00:00.000+0000',
        volume: 3
      },
      {
        date: '2014-06-03T00:00:00.000+0000',
        volume: 12
      },
      {
        date: '2014-06-05T00:00:00.000+0000',
        volume: 8
      }
    ],
    pageType: {
      blog: 4,
      facebook: 13,
      forum: 8,
      general: 1,
      image: 0,
      news: 7,
      review: 1,
      twitter: 13,
      video: 1
    },
    queries: [
      {
        id: 1751295897,
        name: 'Berghain',
        volume: 48
      }
    ]
  },
  {
    id: '1751295897__Hammered',
    label: 'Hammered',
    volume: 48,
    type: 'topic',
    sentiment: {
      neutral: 18,
      negative: 30
    },
    sentimentScore: 20,
    burst: 5,
    days: [
      {
        date: '2014-06-06T00:00:00.000+0000',
        volume: 1
      },
      {
        date: '2014-06-04T00:00:00.000+0000',
        volume: 8
      },
      {
        date: '2014-06-09T00:00:00.000+0000',
        volume: 0
      },
      {
        date: '2014-06-07T00:00:00.000+0000',
        volume: 0
      },
      {
        date: '2014-06-08T00:00:00.000+0000',
        volume: 1
      },
      {
        date: '2014-06-03T00:00:00.000+0000',
        volume: 0
      },
      {
        date: '2014-06-05T00:00:00.000+0000',
        volume: 8
      }
    ],
    pageType: {
      blog: 0,
      facebook: 3,
      forum: 0,
      general: 0,
      image: 0,
      news: 0,
      review: 0,
      twitter: 15,
      video: 0
    },
    queries: [
      {
        id: 1751295897,
        name: 'Berghain',
        volume: 18
      }
    ]
  }
];

describe('mapper/mapTopic', () => {
  it('should return mapped object with necessary properties', () => {
    const expected = [
      {
        id: '1751295897__Berlin',
        label: 'Berlin',
        volume: 165,
        sentiment: {
          negative: 3,
          neutral: 133,
          positive: 29,
          score: 65,
          range: 'high'
        }
      },
      {
        id: '1751295897__DJ',
        label: 'DJ',
        volume: 48,
        sentiment: {
          neutral: 46,
          positive: 2,
          score: 54,
          range: 'normal'
        }
      },
      {
        id: '1751295897__Hammered',
        label: 'Hammered',
        volume: 48,
        type: 'topic',
        sentiment: {
          neutral: 18,
          negative: 30,
          score: 20,
          range: 'low'
        }
      }
    ];
    const result = mapTopics(sampleInput);
    expect(result).toEqual(expected);
  });
});
