defmodule OurmaidsWeb.Components.Mail.MailTemplate do
  def template(email) do
    "
		<!DOCTYPE html>
		<html xmlns:v='urn:schemas-microsoft-com:vml' xmlns:o='urn:schemas-microsoft-com:office:office' lang='en'>

		<head>
			<title></title>
			<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>
			<meta name='viewport' content='width=device-width, initial-scale=1.0'><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
			<style>
				* {
					box-sizing: border-box;
				}

				body {
					margin: 0;
					padding: 0;
				}

				a[x-apple-data-detectors] {
					color: inherit !important;
					text-decoration: inherit !important;
				}

				#MessageViewBody a {
					color: inherit;
					text-decoration: none;
				}

				p {
					line-height: inherit
				}

				.desktop_hide,
				.desktop_hide table {
					mso-hide: all;
					display: none;
					max-height: 0px;
					overflow: hidden;
				}

				.image_block img+div {
					display: none;
				}

				@media (max-width:620px) {
					.desktop_hide table.icons-inner {
						display: inline-block !important;
					}

					.icons-inner {
						text-align: center;
					}

					.icons-inner td {
						margin: 0 auto;
					}

					.row-content {
						width: 100% !important;
					}

					.mobile_hide {
						display: none;
					}

					.stack .column {
						width: 100%;
						display: block;
					}

					.mobile_hide {
						min-height: 0;
						max-height: 0;
						max-width: 0;
						overflow: hidden;
						font-size: 0px;
					}

					.desktop_hide,
					.desktop_hide table {
						display: table !important;
						max-height: none !important;
					}

					.row-2 .column-1 .block-1.list_block td.pad {
						padding: 30px 30px 30px 25px !important;
					}

					.row-2 .column-1 .block-1.list_block ul {
						line-height: auto !important;
					}
				}
			</style>
		</head>

		<body style='background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;'>
			<table class='nl-container' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;'>
				<tbody>
					<tr>
						<td>
							<table class='row row-1' align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;'>
								<tbody>
									<tr>
										<td>
											<table class='row-content stack' align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f3e5f6; color: #000000; width: 600px;' width='600'>
												<tbody>
													<tr>
														<td class='column column-1' width='100%' style='font-weight: 400; text-align: left; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;'>
															<table class='heading_block block-1' width='100%' border='0' cellpadding='10' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;'>
																<tr>
																	<td class='pad'>
																		<h1 style='margin: 0; color: #525252; direction: ltr; font-family: Arial, Helvetica, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;'><span class='tinyMce-placeholder'>Our Maids</span></h1>
																	</td>
																</tr>
															</table>
															<table class='paragraph_block block-3' width='100%' border='0' cellpadding='10' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;'>
																<tr>
																	<td class='pad'>
																		<div style='color:#101112;direction:ltr;font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;'>
																			<p style='margin: 0;'>Booking confirmation.</p>
																		</div>
																	</td>
																</tr>
															</table>
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
							<table class='row row-2' align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;'>
								<tbody>
									<tr>
										<td>
											<table class='row-content stack' align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9f9f9; color: #000000; width: 600px;' width='600'>
												<tbody>
													<tr>
														<td class='column column-1' width='100%' style='font-weight: 400; text-align: left; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;'><!--[if mso]><style>#list-r1c0m0 ul{margin: 0 !important; padding: 0 !important;} #list-r1c0m0 ul li{mso-special-format: bullet;}#list-r1c0m0 .levelOne li {margin-top: 0 !important;} #list-r1c0m0 .levelOne {margin-left: -20px !important;}#list-r1c0m0 .levelTwo li {margin-top: 0 !important;} #list-r1c0m0 .levelTwo {margin-left: 13px !important;}#list-r1c0m0 .levelThree li {margin-top: 0 !important;} #list-r1c0m0 .levelThree {margin-left: 46px !important;}#list-r1c0m0 .levelFour li {margin-top: 0 !important;} #list-r1c0m0 .levelFour {margin-left: 79px !important;}#list-r1c0m0 .levelFive li {margin-top: 0 !important;} #list-r1c0m0 .levelFive {margin-left: 112px !important;}#list-r1c0m0 .levelSix li {margin-top: 0 !important;} #list-r1c0m0 .levelSix {margin-left: 145px !important;}#list-r1c0m0 .levelSeven li {margin-top: 0 !important;} #list-r1c0m0 .levelSeven {margin-left: 178px !important;}#list-r1c0m0 .levelEight li {margin-top: 0 !important;} #list-r1c0m0 .levelEight {margin-left: 211px !important;}</style><![endif]-->
															<table class='list_block block-1' id='list-r1c0m0' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;'>
																<tr>
																	<td class='pad' style='padding-bottom:30px;padding-left:60px;padding-right:30px;padding-top:30px;'>
																		<div class='levelOne' style='margin-left: 0;'>
																			<ul class='leftList' style='margin-top: 0; margin-bottom: 0; padding: 0; padding-left: 20px; font-weight: 400; text-align: left; color: #101112; direction: ltr; font-family: Arial,Helvetica,sans-serif; font-size: 16px; letter-spacing: 1px; line-height: 120%; list-style-type: disc;'>
																				<li style='margin-bottom: 15px; text-align: left;'>Name: #{email["name"]}</li>
																				<li style='margin-bottom: 15px; text-align: left;'>lastname: #{email["lastname"]}</li>
																				<li style='margin-bottom: 15px; text-align: left;'>Direct Phone Number: #{email["phone"]}</li>
																				<li style='margin-bottom: 15px; text-align: left;'>Datetime: #{email["datetime"]}</li>
																				<li style='margin-bottom: 15px; text-align: left;'>Service's name: #{email["service"]}</li>
																				<li style='margin-bottom: 15px; text-align: left;'>Payment method:  #{email["payment"]}</li>
																				<li style='margin-bottom: 15px; text-align: left;'>Address: #{email["address"]}</li>
																				<li style='margin-bottom: 15px; text-align: left;'>City: #{email["city"]}</li>
																				<li style='margin-bottom: 15px; text-align: left;'>State: #{email["state"]}</li>
																				<li style='margin-bottom: 15px; text-align: left;'>Zip Code: #{email["zipcode"]}</li>

																				<li style='margin-bottom: 15px; text-align: left;'>Message: #{email["message"]}</li>
																			</ul>
																		</div>
																	</td>
																</tr>
															</table>
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
							<table class='row row-3' align='center' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;'>
								<tbody>
									<tr>
										<td>
											<table class='row-content stack' align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;' width='600'>
												<tbody>
													<tr>
														<td class='column column-1' width='100%' style='font-weight: 400; text-align: left; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;'>
															<table class='icons_block block-1' width='100%' border='0' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;'>
																<tr>
																	<td class='pad' style='vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;'>
																		<table width='100%' cellpadding='0' cellspacing='0' role='presentation' style='mso-table-lspace: 0pt; mso-table-rspace: 0pt;'>
																			<tr>
																				<td class='alignment' style='vertical-align: middle; text-align: center;'><!--[if vml]><table align='left' cellpadding='0' cellspacing='0' role='presentation' style='display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;'><![endif]-->
																					<!--[if !vml]><!-->

																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
															</table>
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
			</table><!-- End -->
		</body>

		</html>"
  end
end
