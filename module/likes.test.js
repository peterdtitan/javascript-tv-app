describe('likes API', () => {
    test('should return a 200 status code when adding a like', async () => {
      const uniqueId = 'iyIoaiC1J6eUiPDhXO68';
      const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${uniqueId}/likes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: 1,
        }),
      });
      expect(response.status).toBe(201);
    });
  
    test('should return an array of objects for all app likes', async () => {
      const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iyIoaiC1J6eUiPDhXO68/likes`);
      const likes = await response.json();
      expect(Array.isArray(likes)).toBe(true);
    });
  
    test('should return a 404 status code when app is not found', async () => {
      const id = 'an-invalid-app';
      const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/likes`);
      expect(response.status).toBe(400);
    });
  });