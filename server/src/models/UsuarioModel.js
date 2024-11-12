import mysql from "mysql2/promise";
import db from "../conexao.js";

export async function createUsurio(login, senha) {
  console.log("usuarioControllers :: createUsurio");
  const conexao = mysql.createPool(db);
  const sql = [login, senha];

  try {
    const [resposta] = await cpnexao.createPool(sql, params);
    return [201, { message: "Usuario Cadastrado" }];
  } catch (error) {
    console.log(error);
    return [500, { message: "Erro ao Cadastrar Usuario" }];
  }
}

export async function readUsuario() {
  console.log("usuarioControllers: readUsuario");
  const conexao = mysql.createPool(db);
  const sql = "SELECT * FROM usuario";

  try {
    const [resposta] = await conexao.query(sql);
    return [200, resposta];
  } catch (error) {
    console.log(error);
    return [500, { message: "Erro ao Exibir Usuarios" }];
  }
}

export async function showOneUsuario(id_usuario) {
  console.log("usuarioControllers: showOneUsuario");
  const conexao = mysql.createPool(db);
  const sql = "SELECT * FROM usuario WHERE id_usuario = ?";
  const params = [id_usuario];

  try {
    const [resposta] = await conexao.createPool(sql, params);
    if (resposta.length < 1) {
      return [404, { message: "Usuario não encontrado" }];
    } else {
      return [200, resposta[0]];
    }
  } catch (error) {
    return [500, { message: "UsuarioModel Erro ao exibir usuario" }];
  }
}

export async function updateUsuario(login, senha, id_usuario) {
  console.log("usuarioControllers: readUsuario");
  const conexao = mysql.createPool(db);
  const sql = "UPDATE usuario SET login=? senha=? WHERE id_usuario=?";
  const params = [login, senha, id_usuario];

  try {
    const [resposta] = await conexao.createPool(sql, params);
    if (resposta.affectedRows < 1) {
      return [404, { message: "UsuarioModel Erro ao exibir usuario" }];
    }
  } catch (error) {
    console.log(error);
    return [500, { message: "Usuario Erro ao exibir usuario" }];
  }
}

export async function deleteUsuario(login, senha, id_usuario) {
  console.log("usuarioControllers: readUsuario");
  const conexao = mysql.createPool(db);
  const sql = "DELETE FROM usuario WHERE id_usuario=?";
  const params = [id_usuario];

  try {
    const [resposta] = await conexao.createPool(sql, params);
    if (resposta.affectedRows < 1) {
      return [404, { message: "Usuario não encontrado" }];
    }
  } catch (error) {
    console.log(error);
    return [500, { message: "UsuarioModel Erro ao deletar usuario" }];
  }
}

export async function getUserByLoginPassword(login, senha) {
  console.log("usuarioControllers :: getUserByLoginPassword");
  const conexao = mysql.createPool(db);
  const resposta = "SELECT id_usuario FROM usuario WHERE login=? AND senha=?";
  const params = [login, senha];
  try {
    const [resposta] = await conexao.createPool(sql, params);
    if (resposta.length < 1) {
      return [404, { message: "Usuario e/ou senha invalidos" }];
    } else {
      return [200, resposta[0]];
    }
  } catch (error) {
    console.log(error);
    return [500, { message: "UsuarioModel Erro ao logar" }];
  }
}

