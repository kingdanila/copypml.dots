export default class extends React.Component {
  render() {
    return (
	<>
	  <style>
	  {`
	  	div {
			background:pink;
		}
		div#header h1 {
			color: purple !important;
		}
		div#header h2 {
			color: yellow !important;
		}
	  `}</style>
	  <link rel="stylesheet" href="http://pml27.dots.org.ua/screen.css" type="text/css" media="all" />
      <div id="header">
        <table border="0">
          <tbody>
            <tr>
              <td>
                <a href="/" title="PML27">
                  <img
                    src="http://pml27.dots.org.ua/images/pml27.png"
                    width="1000"
                    height="750"
                    border="0"
                    alt="PML27 Logo"
                  />
                </a>
              </td>
              <td>
                <h1>Физико-математический лицей №27, г. Харьков</h1>
                <h2>
                  ПРАКТИКУМ ПО ПРОГРАММИРОВАНИЮ (&#0171;DOTS&#0187; v1.5<img
                    alt="b"
                    src="http://pml27.dots.org.ua/images/b.gif"
                    style={{ marginBottom: "-4px;" }}
                  />)
                </h2>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


<div id="fb-root"></div>

		<table border="0" width="100%" cellspacing="0" cellpadding="0" id="table1">
			<tr>
				<td valign="top">
					<div align="center">
						<table class="c9" border="0" width="800" cellspacing="0" cellpadding="0" id="table2">

							<td valign="top" align="center">
								<table class="c4" border="0" width="100%" cellspacing="1">
									<tr>
										<td class="c1" align="center">
											<div class="c1">
												<a href="/lol" style={{ fontSize: "5em" }}>Красивые картинки фей тут</a>
											</div>
										</td>
									</tr>
								</table>
							</td>
						</table>
					</div>
				</td>
			</tr>
		</table>						
		<img src="http://krasivie-kartinki.ru/images/elf138.gif"
		width="1500"
		height="1500"
		border="0"/> 
		

	  </>
    );
  }
}
