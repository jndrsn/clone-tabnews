function status(request, response) {
  response.status(200).json({
    chave: "testando uma API - interface de programação de aplicações ",
  });
}

export default status;
