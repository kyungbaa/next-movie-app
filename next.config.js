/** @type {import('next').NextConfig} */
const API_KEY = process.env.NEXT_PUBLIC_MOVIE_API_KEY;
const nextConfig = {
  reactStrictMode: true,
  // Redirects (URL변경됨) Redirect을 사용하면 들어오는 request 경로를 다른 destination 경로로 Redirect할 수 있습니다.
  // Rewrites (URL변경되지 않음)
  // Rewrites를 사용하면 들어오는 request 경로를 다른 destination 경로에 매핑할 수 있습니다.
  // Rewrites은 URL 프록시 역할을 하고 destination 경로를 mask하여 사용자가 사이트에서 위치를 변경하지 않은 것처럼 보이게 합니다.
  // 반대로 redirects은 새 페이지로 reroute되고 URL 변경 사항을 표시합니다.
  async redirects() {
    return [
      {
        source: '/old-blog/:path*',
        destination: '/new-blog/:path*',
        // destination: '/form',
        // destination: 'https://github.com/kyungbaa?tab=repositories',

        permanent: false,
        // 주소창에 /contact 입력시 /form으로 리다이렉트
        // source: 들어오는 request 경로 패턴 (request 경로)
        // destination: 라우팅하려는 경로 (redirect할 경로)
        // permanent: true인 경우 클라이언트와 search 엔진에 redirect를 영구적으로 cache하도록 지시하는 308 status code를 사용하고,
        //            false인 경우 일시적이고 cache되지 않은 307 status code를 사용
      },
      {
        source: '/contact/',
        destination: 'https://github.com/kyungbaa?tab=repositories',

        permanent: false,
        // 여러개 작성하고 싶을 때 이런식으로
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: '/api/movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
