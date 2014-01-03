// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  console.log('=>>>');
  console.log(Lists);
  console.log(Lists.find().count());
  if (Lists.find().count() === 0) {
    var data = [
      {name: "Организации 1",
       contents: [
         ["Кондор-Электро", "132.241.156.24/22", "142.45.51.32/22", "165.34.45.45/23"],
         ["1000-радиодеталей", "143.152.141.23/24", "152.12.32.45/22"],
         ["AZ", "152.12.23.44/12"],
         ["El-izol", "165.54.12.35/22"],
         ["ITC-Electronics", "132.56.87.98/15", "125.45.96.85/11"],
         ["КРОН", "152.133.142.32/15"],
         ["Tesar", "65.64.123.56/21", "132.67.86.85/13"],
         ["Аксис", "45.54.89.32/18"],
         ["АльянсЭнергоТрейд", "231.86.65.84/20"],
         ["Ангамир", "241.23.65.95/19"],
         ["Бизнес Дона", "231.21.25.26/18"],
         ["БИС", "231.45.65.98/23"],
         ["Бриз", "123.65.98.48/24"],
         ["Ваш Дом-Электро", "125.16.16.12/12"],
         ["Вилдис-ЮГ", "215.49.46.164/22"],
         ["ВТР-Электроникс", "129.54.65.94/24"]
       ]
      },
      {name: "Организации 2",
       contents: [
         ["Кондор-Электро", "132.241.156.24/22", "142.45.51.32/22", "165.34.45.45/23"],
         ["1000-радиодеталей", "143.152.141.23/24", "152.12.32.45/22"],
         ["AZ", "152.12.23.44/12"],
         ["El-izol", "165.54.12.35/22"],
         ["ITC-Electronics", "132.56.87.98/15", "125.45.96.85/11"],
         ["КРОН", "152.133.142.32/15"],
         ["Tesar", "65.64.123.56/21", "132.67.86.85/13"],
         ["Аксис", "45.54.89.32/18"],
         ["АльянсЭнергоТрейд", "231.86.65.84/20"],
         ["Ангамир", "241.23.65.95/19"],
         ["Бизнес Дона", "231.21.25.26/18"],
         ["БИС", "231.45.65.98/23"],
         ["Бриз", "123.65.98.48/24"],
         ["Ваш Дом-Электро", "125.16.16.12/12"],
         ["Вилдис-ЮГ", "215.49.46.164/22"],
         ["ВТР-Электроникс", "129.54.65.94/24"]
       ]
      },
      /*{name: "Meteor Principles",
       contents: [
         ["Data on the Wire", "Simplicity", "Better UX", "Fun"],
         ["One Language", "Simplicity", "Fun"],
         ["Database Everywhere", "Simplicity"],
         ["Latency Compensation", "Better UX"],
         ["Full Stack Reactivity", "Better UX", "Fun"],
         ["Embrace the Ecosystem", "Fun"],
         ["Simplicity Equals Productivity", "Simplicity", "Fun"]
       ]
      },
      {name: "Languages",
       contents: [
         ["Lisp", "GC"],
         ["C", "Linked"],
         ["C++", "Objects", "Linked"],
         ["Python", "GC", "Objects"],
         ["Ruby", "GC", "Objects"],
         ["JavaScript", "GC", "Objects"],
         ["Scala", "GC", "Objects"],
         ["Erlang", "GC"],
         ["6502 Assembly", "Linked"]
         ]
      },
      {name: "Favorite Scientists",
       contents: [
         ["Ada Lovelace", "Computer Science"],
         ["Grace Hopper", "Computer Science"],
         ["Marie Curie", "Physics", "Chemistry"],
         ["Carl Friedrich Gauss", "Math", "Physics"],
         ["Nikola Tesla", "Physics"],
         ["Claude Shannon", "Math", "Computer Science"]
       ]
      }*/
    ];

    var timestamp = (new Date()).getTime();
    for (var i = 0; i < data.length; i++) {
      var list_id = Lists.insert({name: data[i].name});
      for (var j = 0; j < data[i].contents.length; j++) {
        var info = data[i].contents[j];
        Todos.insert({list_id: list_id,
                      text: info[0],
                      timestamp: timestamp,
                      tags: info.slice(1)});
        timestamp += 1; // ensure unique timestamp.
      }
    }
  }
});
