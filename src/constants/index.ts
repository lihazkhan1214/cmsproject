export interface DropdownLink {
    name: string;
    href: string;
  }
  
  export interface DropdownLinks {
    [key: string]: DropdownLink[];
  }
  
  export const dropdownLinksData: DropdownLinks = {
    Resources: [{ name: 'Blog', href: '/blog' }, { name: 'Color Inspiration', href: '/color-inspiration' },{ name: 'Software Logs', href: '/software-logos' },{ name: 'No Code Tools', href: '/nocode-tools' },{ name: 'Support', href: '/support' }],
  
   
  };
  
  
  
  
  