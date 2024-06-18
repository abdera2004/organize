import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydatabase.db');

// Função para criar a tabela de usuários se ainda não existir
const createTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        sobrenome TEXT,
        email TEXT,
        senha TEXT,
        foto BLOB,
        saldo REAL DEFAULT 0
      )`,
      [],
      () => {
        console.log('Tabela de usuários criada com sucesso');
      },
      (error) => {
        console.log('Erro ao criar tabela de usuários', error);
      }
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Session (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER,
        authToken TEXT
      )`,
      [],
      () => {
        console.log('Tabela de sessão criada com sucesso');
      },
      (error) => {
        console.log('Erro ao criar tabela de sessão', error);
      }
    );
  });
};

const insertUser = (nome, sobrenome, email, senha) => {
  return new Promise((resolve, reject) => {
    // Verificar se já existe um usuário com o mesmo nome ou e-mail
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT COUNT(*) AS count FROM Users WHERE nome = ? OR email = ?',
        [nome, email],
        (_, { rows }) => {
          const count = rows.item(0).count;
          if (count > 0) {
            // Já existe um usuário com o mesmo nome ou e-mail
            reject(new Error('Já existe um usuário com o mesmo nome ou e-mail.'));
          } else {
            // Nenhum usuário encontrado com o mesmo nome ou e-mail, realizar inserção
            tx.executeSql(
              'INSERT INTO Users (nome, sobrenome, email, senha, foto) VALUES (?, ?, ?, ?, ?)',
              [nome, sobrenome, email, senha, null],
              () => {
                console.log('Usuário inserido com sucesso');
                resolve();
              },
              (error) => {
                console.log('Erro ao inserir usuário', error);
                reject(error);
              }
            );
          }
        },
        (_, error) => {
          console.log('Erro ao verificar duplicidade de usuário', error);
          reject(error);
        }
      );
    });
  });
};

const getUsers = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Users', [], (_, { rows }) => {
          const users = [];
          for (let i = 0; i < rows.length; i++) {
            users.push(rows.item(i));
          }
          resolve(users);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

const getUserByEmailAndPassword = (email, senha) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Users WHERE email = ? AND senha = ?',
        [email, senha],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows.item(0)); // Retorna o primeiro usuário encontrado
          } else {
            reject(new Error('Email ou senha inválidos'));
          }
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

// Função para limpar o banco de dados (excluir todos os registros da tabela de usuários)
const clearDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      // Excluir tabelas existentes
      tx.executeSql('DROP TABLE IF EXISTS Users;', [], () => {
        console.log('Tabela "Users" excluída');
      }, error => {
        console.log('Erro ao excluir tabela "Users"', error);
        reject(error);
      });

      tx.executeSql('DROP TABLE IF EXISTS Session;', [], () => {
        console.log('Tabela "Session" excluída');
      }, error => {
        console.log('Erro ao excluir tabela "Session"', error);
        reject(error);
      });

      // Recriar tabelas
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, sobrenome TEXT, email TEXT, senha TEXT, foto BLOB, saldo REAL DEFAULT 0)',
        [],
        () => {
          console.log('Tabela "Users" recriada');
        },
        (error) => {
          console.log('Erro ao recriar tabela "Users"', error);
          reject(error);
        }
      );

      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Session (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, authToken TEXT)',
        [],
        () => {
          console.log('Tabela "Session" recriada');
          resolve();
        },
        (error) => {
          console.log('Erro ao recriar tabela "Session"', error);
          reject(error);
        }
      );
    });
  });
};

const insertSession = async (sessionData) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO Session (userId, authToken) VALUES (?, ?)',
        [sessionData.userId, sessionData.authToken],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

const getSession = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Session',
        [],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows._array); // Retorna um array com os dados das sessões
          } else {
            resolve([]); // Retorna um array vazio se não houver sessões registradas
          }
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

const updateUserBalance = (userId, amount) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE Users SET saldo = saldo + ? WHERE id = ?',
        [amount, userId],
        (_, result) => {
          if (result.rowsAffected > 0) {
            resolve();
          } else {
            reject(new Error('Erro ao atualizar saldo'));
          }
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

const getUserBalance = (userId) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT saldo FROM Users WHERE id = ?',
        [userId],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows.item(0).saldo);
          } else {
            reject(new Error('Usuário não encontrado'));
          }
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

// Função para excluir o banco de dados
import * as FileSystem from 'expo-file-system';

const dbName = 'mydatabase.db';

const deleteDatabase = async () => {
  const dbPath = `${FileSystem.documentDirectory}SQLite/${dbName}`;
  
  try {
    // Verifique se o arquivo de banco de dados existe
    const fileInfo = await FileSystem.getInfoAsync(dbPath);
    
    if (fileInfo.exists) {
      // Feche o banco de dados antes de excluí-lo
      const db = SQLite.openDatabase(dbName);
      db.closeAsync();

      // Exclua o arquivo de banco de dados
      await FileSystem.deleteAsync(dbPath, { idempotent: true });
      console.log('Banco de dados excluído com sucesso');
    } else {
      console.log('Banco de dados não encontrado');
    }
  } catch (error) {
    console.log('Erro ao excluir o banco de dados', error);
  }
};

const getUserById = (userId) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Users WHERE id = ?',
        [userId],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows.item(0)); // Retorna o usuário encontrado
          } else {
            reject(new Error('Usuário não encontrado'));
          }
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};


export { getUserById, createTable, insertUser, getUsers, getUserByEmailAndPassword, clearDatabase, insertSession, getSession, getUserBalance, updateUserBalance, deleteDatabase };
