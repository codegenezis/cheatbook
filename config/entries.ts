  
export interface Post {
    title: string;
    slug?: string;
    date: Date;
  }
  
  export const entries: Post[] = [
    {
      title: 'bash-cheatsheet',
      date: new Date('2021-01-27'),
    },
    {
      title: 'python-cheatsheet',
      date: new Date('2020-12-23'),
    },
    {
      title: 'Jump-starting a fresh MacBook for Front End JavaScript development',
      date: new Date('2020-10-11')
    }
  ];