export const apiRequest = async (url: string, options?: RequestInit) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}${url}`,
      options || { method: 'GET' }
    );
    if (!response.ok) {
      throw new Error('서버 상태가 이상합니다.');
    }
    return response;
  } catch {
    throw new Error('서버와의 통신에 실패하였습니다.');
  }
};
