const email = "luizcowbtf@gmail.com";
const subject = "Innovvatio";
const message =
  "Hello!%0D%0A%0D%0ASaw%20you%20web%20app%20Innovvatio%20Filmes,%20and%20wanted%20to%20talk%20to%20you.%0D%0A%0D%0AThanks.";
const emailLink = `mailto:${email}?subject=${subject}&body=${message}`;

const Contact = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-4">Contatos</h1>
            <div className="bd-example">
              <address>
                <h3>Endereços</h3>
                <strong>Rio de Janeiro</strong>
                <br />
                Rua Quiririm, 644
                <br />
                Vila Valqueire - Rio de Janeiro
                <br />
                R.J. - Brasil, 21330-655
                <br />
                +55 21 99729-8850
                <br /><br />
                <strong>Vitória</strong>
                <br />
                Rua Jacinto Bresciani, 14
                <br />
                Bairro República - Vitória
                <br />
                E.S. - Brasil, 29070-065
                <br />
                +55 27 99531-3447
              </address>

              <hr className="my-4" />

              <address>
                <strong>Luiz Claudio Dias Gomes == Innovvatio</strong>
                <br />
                <a className="badge badge-pill badge-dark" href={emailLink}>
                  {email}
                </a>
                <br />
                <a className="badge badge-pill badge-dark" href="https://www.innovvationet.com.br" target="_blank">
                  Innovvatio
                </a>
              </address>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
