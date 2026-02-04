window.liffFunctions = {
    init: async (liffId) => {
        try {
            await liff.init({ liffId: liffId });
            if (liff.isLoggedIn()) {
                return true;
            } else {
                liff.login();
                return false;
            }
        } catch (error) {
            console.error("LIFF Init Error:", error);
            return false;
        }
    },
    getProfile: async () => {
        if (liff.isLoggedIn()) {
            return await liff.getProfile();
        }
        return null;
    }
};
