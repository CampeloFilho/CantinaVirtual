# Cantina Virtual

## 📌 Sobre o Projeto
Cantina Virtual é um aplicativo estilo delivery que permite que os pais dos alunos realizem pedidos antecipados de lanches para seus filhos, garantindo organização, evitando desperdícios e facilitando a gestão da cantina escolar.

## 🚀 Tecnologias Utilizadas
O projeto será desenvolvido com as seguintes tecnologias:

### **Frontend (Aplicativo Mobile - Android)**
- Kotlin (Jetpack Compose) **ou** Flutter
- Firebase Authentication (para login)
- Firebase Firestore (caso seja escolhido para banco de dados)

### **Backend (API e Banco de Dados)**
- Node.js com Express **ou** Django com Django REST Framework
- PostgreSQL/MySQL **ou** Firebase Firestore
- Integração com Mercado Pago/Stripe (para pagamentos, se possível)

### **Gerenciamento do Projeto**
- Trello/Jira para organização das tarefas
- GitHub para versionamento de código

---

## 🛠️ Configuração do Ambiente
Siga os passos abaixo para configurar o projeto em sua máquina:

### **1️⃣ Clonar o Repositório**
```bash
git clone https://github.com/seu-usuario/cantina-virtual.git
cd cantina-virtual
```

### **2️⃣ Configurar o Backend**
Se estiver utilizando **Node.js**:
```bash
cd backend
npm install  # Instalar dependências
npm start  # Iniciar o servidor
```

Se estiver utilizando **Django**:
```bash
cd backend
pip install -r requirements.txt  # Instalar dependências
python manage.py runserver  # Iniciar o servidor
```

### **3️⃣ Configurar o Frontend**
Se estiver usando **Kotlin**:
- Abrir a pasta `frontend` no Android Studio
- Conectar um emulador ou dispositivo físico
- Rodar o projeto

Se estiver usando **Flutter**:
```bash
cd frontend
flutter pub get  # Baixar dependências
flutter run  # Executar o app
```

---

## 📂 Estrutura do Repositório
```
/cantina-virtual
│─
