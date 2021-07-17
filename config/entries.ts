  
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
      title: 'git-cheatsheet',
      date: new Date('2020-10-11')
    },
    {
      title: 'docker-cheatsheet',
      date: new Date('2020-10-11')
    },
    {
      title: 'Ansible-cheatsheet',
      date: new Date('2020-10-11')
    }
  ];