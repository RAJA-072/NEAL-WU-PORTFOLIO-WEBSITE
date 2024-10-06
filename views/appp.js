angular.module('achievementApp', ['ngAnimate'])
  .controller('AchievementController', function($scope) {
    $scope.achievements = [
      {
        link: 'https://sonnguyenhoang.com',
        img: 'https://github-readme-streak-stats.herokuapp.com/?user=nealwu&theme=radical',
        alt: "Hoang Son's GitHub Streak"
      },
      {
        link: 'https://sonnguyenhoang.com',
        img: 'https://github-profile-trophy.vercel.app/?username=nealwu&theme=radical&column=3&row=1&margin-w=15&margin-h=15',
        alt: "Hoang Son's GitHub Trophies"
      },
      {
        link: 'https://sonnguyenhoang.com',
        img: 'https://github-readme-stats.vercel.app/api/top-langs/?username=nealwu&layout=compact&theme=radical&langs_count=10',
        alt: "Hoang Son's Most Used Languages"
      },
      {
        link: 'https://sonnguyenhoang.com',
        img: 'https://github-contribution-stats.vercel.app/api/?username=nealwu&theme=radical&layout=compact',
        alt: "Hoang Son's GitHub Stats"
      },
      {
        link: 'https://sonnguyenhoang.com',
        img: 'https://img.shields.io/github/followers/nealwu?style=social',
        alt: "Hoang Son's GitHub Followers"
      },
      {
        link: 'https://sonnguyenhoang.com',
        img: 'https://img.shields.io/github/stars/nealwu?style=social',
        alt: "Hoang Son's GitHub Stars"
      }
    ];
  });
