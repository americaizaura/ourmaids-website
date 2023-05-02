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
    },
  ];
  return (
    <div>
      <Grid>
        <Grid.Col span="auto">
          <h4>Our Maids, INC</h4>
        </Grid.Col>
        <Grid.Col span="auto">
          <h5>Locations</h5>
          {/* split locations in two rows */}
          <Grid>
            <Grid.Col span={6}>
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
            <Grid.Col span="auto">
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
          logo, its colors, Our Maids and "A helping Hand for Busy People" are
          registered <br />
          trademarks of Our Maids, Inc., a Delaware Corporation.
        </Text>
      </div>
    </div>
  );
};
export default Footer;
