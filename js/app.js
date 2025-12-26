const { createApp } = Vue;

const pinia = Pinia.createPinia();

const app = createApp({
    setup() {
        const store = useUserStore();
        const showDeleteModal = Vue.ref(false);
        const userToDelete = Vue.ref(null);
        const showFormModal = Vue.ref(false);
        const formMode = Vue.ref('create');
        const formData = Vue.ref({
            id: null,
            name: '',
            email: ''
        });

        const openCreateModal = () => {
            formMode.value = 'create';
            formData.value = {
                id: null,
                name: '',
                email: ''
            };
            showFormModal.value = true;
        };

        const openEditModal = (user) => {
            formMode.value = 'edit';
            formData.value = {
                id: user.id,
                name: user.name,
                email: user.email
            };
            showFormModal.value = true;
        };

        const closeFormModal = () => {
            showFormModal.value = false;
            formData.value = {
                id: null,
                name: '',
                email: ''
            };
        };

        const submitForm = () => {
            if (!formData.value.name || !formData.value.email) {
                return;
            }

            if (formMode.value === 'create') {
                store.createUser({
                    name: formData.value.name,
                    email: formData.value.email
                });
            } else {
                store.updateUser(formData.value.id, {
                    name: formData.value.name,
                    email: formData.value.email
                });
            }

            closeFormModal();
        };

        const confirmDelete = (user) => {
            userToDelete.value = user;
            showDeleteModal.value = true;
        };

        const cancelDelete = () => {
            showDeleteModal.value = false;
            userToDelete.value = null;
        };

        const deleteUser = () => {
            if (userToDelete.value) {
                store.deleteUser(userToDelete.value.id);
                showDeleteModal.value = false;
                userToDelete.value = null;
            }
        };

        return {
            store,
            showDeleteModal,
            userToDelete,
            confirmDelete,
            cancelDelete,
            deleteUser,
            showFormModal,
            formMode,
            formData,
            openCreateModal,
            openEditModal,
            closeFormModal,
            submitForm
        };
    }
});

app.use(pinia);
app.mount('#app');
