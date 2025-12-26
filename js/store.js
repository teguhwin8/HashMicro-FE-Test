const useUserStore = Pinia.defineStore('user', {
    state: () => ({
        users: [
            { id: 1, name: 'John Doe', email: 'john@mail.com' },
            { id: 2, name: 'Jane Doe', email: 'jane@mail.com' },
            { id: 3, name: 'Michael Smith', email: 'michael@mail.com' }
        ]
    }),
    actions: {
        getUserById(userId) {
            return this.users.find(user => user.id === userId);
        },
        createUser(userData) {
            const newId = this.users.length > 0
                ? Math.max(...this.users.map(u => u.id)) + 1
                : 1;
            const newUser = {
                id: newId,
                ...userData
            };
            this.users.push(newUser);
            return newUser;
        },
        updateUser(userId, updatedData) {
            const index = this.users.findIndex(user => user.id === userId);
            if (index !== -1) {
                this.users[index] = { ...this.users[index], ...updatedData };
                return true;
            }
            return false;
        },
        deleteUser(userId) {
            const index = this.users.findIndex(user => user.id === userId);
            if (index !== -1) {
                this.users.splice(index, 1);
                return true;
            }
            return false;
        }
    }
});
