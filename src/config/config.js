const backUrl = process.env.NODE_ENV === 'production' ? 'http://172.30.1.100:3000' : 'http://localhost:3000';
const frontUrl = process.env.NODE_ENV === 'production' ? 'http://172.30.1.100:3000' : 'http://localhost:3000';

export { backUrl, frontUrl };
