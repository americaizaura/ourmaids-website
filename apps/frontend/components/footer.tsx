import { Divider, Grid, Text } from "@mantine/core";

const Footer = () => {
  const locations = [
    {
      name: "Los Angeles, CA",
      href: "#",
    },
    {
      name: "Sun Valley, CA",
      href: "#",
    },
    {
      name: "Dover, DE",
      href: "#",
    },
    {
      name: "Dallas, TX",
      href: "#",
    },
    {
      name: "Ft. Worth, TX",
      href: "#",
    },
    {
      name: "Austin, TX",
      href: "#",
    },
    {
      name: "Oklahoma City, OK",
      href: "#",
    },
    {
      name: "Ocean City, MD",
      href: "#",
    },
    {
      name: "Cancun, MX",
      href: "#",
    },
    {
      name: "Montreal, QC",
      href: "#",
    },
    {
      name: "Merida, MX",
      href: "#",
    },
    {
      name: "Greensboro, NC",
      href: "#",
    },
  ];

  const company = [
    {
      name: "Booking",
      href: "#",
    },
    {
      name: "Locations",
      href: "#",
    },
    {
      name: "Store-Payments",
      href: "#",
    },
    {
      name: "Our fees",
      href: "#",
    },
    {
      name: "Our Services",
      href: "#",
    },
    {
      name: "Franchise Opportunities",
      href: "#",
    },
    {
      name: "Reschedule/Cancelling",
      href: "#",
    },
  ];
  return (
    <footer className="bg-black px-[250px] py-12 mt-[250px]">
      <div className="flex justify-between">
        <div>
          <h4 className="text-background">Our Maids, INC</h4>
        </div>
        <div>
          <h5 className="text-background">Locations</h5>
          <div className="flex flex-row justify-between text-background gap-10">
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {locations.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <a>{item.name}</a>
                </li>
              ))}
            </ul>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {locations.slice(6, 12).map((item) => (
                <li key={item.name}>
                  <a>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h5 className="text-background">Company</h5>
        </div>
        <div>
          <h5 className="text-background">Social</h5>
        </div>
      </div>
      <Divider
        size="sm"
        style={{
          backgroundColor: "rgba(0,0,0,0.1)",
          margin: "40px 0",
        }}
      />
      <div>
        <p className="text-background" style={{ textAlign: "center" }}>
          © All Rights Reserved Worldwide | 2000-2023. <br /> The Our Maids
          logo, its colors, Our Maids and &quot;A helping Hand for Busy
          People&quot; are registered <br />
          trademarks of Our Maids, Inc., a Delaware Corporation.
        </p>
      </div>
      {/*   <Grid>
        <Grid.Col span="auto">
          <h4>Our Maids, INC</h4>
        </Grid.Col>
        <Grid.Col span="auto">
          <h5>Locations</h5>

          <Grid>
            <Grid.Col md={6} xl={6}>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {locations.slice(0, 6).map((item) => (
                  <li key={item.name}>
                    <a>{item.name}</a>
                  </li>
                ))}
              </ul>
            </Grid.Col>
            <Grid.Col md={6} xl={6}>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {locations.slice(6, 12).map((item) => (
                  <li key={item.name}>
                    <a>{item.name}</a>
                  </li>
                ))}
              </ul>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span="auto">
          <h5>Company</h5>
        </Grid.Col>
        <Grid.Col span="auto">
          <h5>Social</h5>
        </Grid.Col>
      </Grid>
      <Divider
        size="sm"
        style={{
          backgroundColor: "rgba(0,0,0,0.1)",
          margin: "40px 0",
        }}
      />
      <div>
        <Text size="xs" style={{ textAlign: "center" }}>
          © All Rights Reserved Worldwide | 2000-2023. <br /> The Our Maids
          logo, its colors, Our Maids and &quot;A helping Hand for Busy
          People&quot; are registered <br />
          trademarks of Our Maids, Inc., a Delaware Corporation.
        </Text>
      </div> */}
    </footer>
  );
};
export default Footer;
