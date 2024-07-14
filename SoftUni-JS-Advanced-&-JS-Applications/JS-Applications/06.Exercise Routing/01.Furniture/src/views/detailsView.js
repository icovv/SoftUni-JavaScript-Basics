import { html } from "../../node_modules/lit-html/lit-html.js";
import { getFurniture } from "../data/api.js";
import { getUserData } from "../data/userInfo.js";

let detailsViewTemplate = (item,isOwner) => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="../.${item.img}" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${item.make}</span></p>
                <p>Model: <span>${item.model}</span></p>
                <p>Year: <span>${item.year}</span></p>
                <p>Description: <span>${item.description}</span></p>
                <p>Price: <span>${item.price}</span></p>
                <p>Material: <span>${item.material}</span></p>
                <div>
                    ${isOwner ? html`<a href="/edit/${item._id}" class="btn btn-info">Edit</a>
                    <a href="/delete/${item._id}" class="btn btn-red">Delete</a>` : ``}
                </div>
            </div>
        </div>`



export async function showDetailsView(ctx){
    let itemId = ctx.params.id
    let furnitureDetails = await getFurniture(itemId);
    let userData = getUserData();
    let isOwner = false;
    if(userData._id == furnitureDetails._ownerId){
        isOwner = true;
    }
    ctx.render(detailsViewTemplate(furnitureDetails,isOwner));
}