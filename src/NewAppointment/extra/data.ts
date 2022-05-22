import { ImageSourcePropType } from 'react-native';
import TreatmentImg from '../assets/Treatment.jpg';
import PhysicalTraining from '../assets/PhysicalTraining.jpg';

export class Training {

  constructor(readonly title: string,
              readonly description: string,
              readonly photo: ImageSourcePropType,
              readonly time: number,
              readonly styx: string) {

  }

  static basketball(): Training {
    return new Training(
      'Лечебные занятия',
        '1-й, 2-й и 3-й цикл',
      TreatmentImg,
      16,
      '1 час 30 мин.',
    );
  }

  static running(): Training {
    return new Training(
      'Физкультурно-оздоровительные занятия',
      '4-й цикл и последующие',
        PhysicalTraining,
      2,
        '1 час 30 мин.',
    );
  }
}
