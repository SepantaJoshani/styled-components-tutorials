export const uuid = () => {
    const first_section = Date.now().toString(36);
    const second_section = Math.random().toString(36).substring(2);
  
    return first_section.concat(second_section);
  };