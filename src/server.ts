import app from './app';

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

app.listen(Number(PORT), HOST, () => {
    console.log(`🚀 server is running on ${HOST}:${PORT}`);
});
