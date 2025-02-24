type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

type Tag = 'Tough grader' | 'Caring' | 'Test heavy' | 'Extra credit' | 'Group projects' | 'Participation matters';

type Review = {
  professorName: string;
  courseName: string;
  rating: number;
  grade: Grade;
  tags: Tag[];
  takeAgain: boolean;
  content: string;
}

export type { Grade, Tag, Review };
