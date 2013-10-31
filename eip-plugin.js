/**
* Draw.io stencil
*/
Draw.loadPlugin(function(ui) {
    // Adds custom sidebar entry
    ui.sidebar.addPalette('BPMNLibrary', 'EIP', true, function(content) {

        // content.appendChild(ui.sidebar.createVertexTemplate(null, 120, 60));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/MessageIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/ContentBasedRouterIcon.gif', 100, 100));
        
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/MessageTranslatorIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/MessageEndpointIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/DeadLetterChannelIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/MessageBusIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/ContentBasedRouterIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/MessageFilterIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/DynamicRouterIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/RecipientListIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/SplitterIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/SplitterIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/AggregatorIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/ResequencerIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/DistributionAggregateIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/RoutingTableIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/DataEnricherIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/ContentFilterIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/StoreInLibraryIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/NormalizerIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/PollingConsumerIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/EventDrivenConsumerIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/CompetingConsumersIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/MessageDispatcherIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/DurableSubscriptionIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/TransactionalClientIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/MessagingGatewayIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/MessagingAdapterIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/DetourIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/WireTapIcon.gif', 100, 100));
        //
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/EventMessageIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/RequestReplyIcon.gif', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/CorrelationIdentifierIcon.gif', 100, 100));
        
        content.appendChild(ui.sidebar.createEdgeTemplate('edgeStyle=none;endArrow=none;', 100, 100));
        content.appendChild(ui.sidebar.createEdgeTemplate('shape=link', 100, 100));
        content.appendChild(ui.sidebar.createEdgeTemplate('arrow', 100, 100));
    });

    // Collapses default sidebar entry and inserts this before
    var c = ui.sidebar.container;
    c.firstChild.click();
    c.insertBefore(c.lastChild, c.firstChild);
    c.insertBefore(c.lastChild, c.firstChild);

});
