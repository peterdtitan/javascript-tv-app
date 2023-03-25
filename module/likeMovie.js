export default class InvolvementAPI {
    static baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';

    static appID = 'iyIoaiC1J6eUiPDhXO68';

    static itemLikes = [];

    static async likeMovie() {
      const likeBtn = document.querySelectorAll('.like-btn');
      likeBtn.forEach((btn) => {
        btn.addEventListener('click', async () => {
          const id = btn.dataset.show;
          if (btn.innerHTML === 'Liked this') {
            // eslint-disable-next-line no-alert
            alert('Already liked this!');
          } else {
            const movie = await fetch(`${this.baseURL}/${this.appID}/likes/`, {
              method: 'POST',
              body: JSON.stringify({
                item_id: id,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            }).then((response) => response.status === 201);

            if (movie) {
              btn.innerHTML = 'Liked this';
              await this.updateLikes();
            }
          }
        });
      });
    }

    static getLikes = async () => fetch(`${this.baseURL}/${this.appID}/likes/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(async (response) => {
      if (response.status === 200) {
        let data = [];
        try {
          data = await response.json();
        } catch (e) {
          return null;
        }
        this.itemLikes = data;
        return true;
      }
      return null;
    });

    static getLikesByMovie = async (id) => {
      await this.getLikes();
      const likes = this.itemLikes.find((item) => item.item_id === id);
      if (!likes) {
        return 0;
      }
      return likes.likes;
    }

    static async updateLikes() {
      const likes = document.querySelectorAll('.total-likes');
      likes.forEach(async (like) => {
        const id = like.dataset.show;
        const likes = await this.getLikesByMovie(id);
        like.textContent = `${likes} likes`;
      });
    }
}