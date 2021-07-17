  
export interface Post {
    title: string;
    slug?: string;
    date: Date;
    image: string;
  }
  
  export const entries: Post[] = [
    {
      title: 'bash-cheatsheet',
      date: new Date('2021-01-27'),
      image: '/assets/Bash.jpeg'
    },
    {
      title: 'python-cheatsheet',
      date: new Date('2020-12-23'),
      image: '/assets/python.png'
    },
    {
      title: 'git-cheatsheet',
      date: new Date('2020-10-11'),
      image: '/assets/git.jpg'
    },
    {
      title: 'docker-cheatsheet',
      date: new Date('2020-10-11'),
      image: '/assets/docker.png'
    },

  ];