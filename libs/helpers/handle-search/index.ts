export const handleSearch = (arr: any[], text: string) => arr.find(item => item.name.toLowerCase() === text.toLowerCase())
