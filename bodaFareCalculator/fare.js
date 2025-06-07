function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15;
  const totalFare = baseFare + (distanceInKm * chargePerKm);

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES 50`);
  console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("Panda Pikipiki!");
}

const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distance = Number(input);

if (!isNaN(distance) && distance > 0) {
  calculateBodaFare(distance);
} else {
  console.log("Please enter a valid number of kilometers.");
}

