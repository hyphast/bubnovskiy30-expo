import { ImageSourcePropType } from 'react-native';

export class Article {

  constructor(readonly title: string,
              readonly description: string,
              readonly content: string,
              readonly image: ImageSourcePropType,
              readonly date: string,
              readonly author: Profile,
              readonly likes: Like[],
              readonly comments: Comment[]) {
  }

  static howToEatHealthy(): Article {
    return new Article(
      'Упражнения Бубновского',
      '10 полезных советов',
      'Современная кинезитерапия («kinezis» - от греч. движение, «therapy» - лечение) - это уникальная методика лечения и реабилитации заболеваний костно-мышечной системы, в которой основным лечебным средством являются специально разработанные декомпрессионные упражнения на авторских тренажерах.',
      require('../assets/image-article-background-1.jpg'),
      '12 Сентября, 2022',
      Profile.markVolter(),
      [
        Like.byMarkVolter(),
        Like.byHubertFranck(),
      ],
      [
        Comment.byHubertFranck(),
        Comment.byHubertFranck(),
        Comment.byHubertFranck(),
      ],
    );
  }

  static whyWorkoutImportant(): Article {
    return new Article(
      'Упражнения Бубновского',
      'Советы',
      'Современная кинезитерапия («kinezis» - от греч. движение, «therapy» - лечение) - это уникальная методика лечения и реабилитации заболеваний костно-мышечной системы, в которой основным лечебным средством являются специально разработанные декомпрессионные упражнения на авторских тренажерах.',
      require('../assets/image-article-background-2.jpg'),
      '22 Октября, 2022',
      Profile.hubertFranck(),
      [
        Like.byMarkVolter(),
        Like.byHubertFranck(),
      ],
      [
        Comment.byHubertFranck(),
        Comment.byHubertFranck(),
        Comment.byHubertFranck(),
      ],
    );
  }

  static morningWorkouts(): Article {
    return new Article(
      'Справочники заболеваний',
      '5 книг',
      'Современная кинезитерапия («kinezis» - от греч. движение, «therapy» - лечение) - это уникальная методика лечения и реабилитации заболеваний костно-мышечной системы, в которой основным лечебным средством являются специально разработанные декомпрессионные упражнения на авторских тренажерах.',
      require('../assets/image-article-background-3.jpg'),
      '22 Декабря, 2022',
      Profile.markVolter(),
      [
        Like.byMarkVolter(),
        Like.byHubertFranck(),
      ],
      [
        Comment.byHubertFranck(),
        Comment.byHubertFranck(),
        Comment.byHubertFranck(),
      ],
    );
  }
}

export class Like {

  constructor(readonly author: Profile) {

  }

  static byMarkVolter(): Like {
    return new Like(
      Profile.markVolter(),
    );
  }

  static byHubertFranck(): Like {
    return new Like(
      Profile.hubertFranck(),
    );
  }
}

export class Comment {

  constructor(readonly text: string,
              readonly date: string,
              readonly author: Profile,
              readonly comments: Comment[],
              readonly likes: Like[]) {
  }

  static byHubertFranck(): Comment {
    return new Comment(
      'This very useful information for me Thanks for your article!',
      'Today 11:10 am',
      Profile.hubertFranck(),
      [
        Comment.byMarkVolter(),
      ],
      [
        Like.byMarkVolter(),
      ],
    );
  }

  static byMarkVolter(): Comment {
    return new Comment(
      'Thanks!',
      'Today 11:10 am',
      Profile.hubertFranck(),
      [],
      [],
    );
  }
}

export class Profile {

  constructor(readonly firstName: string,
              readonly lastName: string,
              readonly photo: ImageSourcePropType) {
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static markVolter(): Profile {
    return new Profile(
      'Mark',
      'Volter',
      require('../assets/image-profile.jpg'),
    );
  }

  static hubertFranck(): Profile {
    return new Profile(
      'Hubert',
      'Franck',
      require('../assets/image-profile.jpg'),
    );
  }
}

