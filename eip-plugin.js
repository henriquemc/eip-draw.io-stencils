/**
* Enterprise integration patterns stencil for draw.io.
* Luiz Henrique Moura Carvalho luizhmc@gmail.com
*/
Draw.loadPlugin(function(ui) {
    // Adds custom sidebar entry
    	
	ui.sidebar.addPalette('EIPLibrary', 'EIP - Messaging Systems', true, function(content) {
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/MessageIcon.gif', 100,100, 'Message', 'Message', true));
		content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/ChannelIcon.gif', 100,100, 'Channel', 'Channel', true));
		content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/PipesAndFiltersIcon.gif', 100,100, 'Pipes', 'Pipes', true));         
		content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/ContentBasedRouterIcon.gif', 100,100, 'Message Router', 'Message Router', true));
		content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/MessageTranslatorIcon.gif', 100,100, 'Message Translator', 'Message Translator', true));
		content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/MessageEndpointIcon.gif', 100,100, 'Message Endpoint', 'Message Endpoint', true));
				
    });
	
	ui.sidebar.addPalette('EIPLibrary', 'EIP - Messaging Channels', true, function(content) {
		content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/DeadLetterChannelIcon.gif', 100,100, 'Dead Letter Channel', 'Dead Letter Channel', true));
		content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/MessageBusIcon.gif', 100,100, 'Message Bus', 'Message Bus', true));
		content.appendChild(ui.sidebar.createEdgeTemplate('shape=connection', 100,100,'','Point to point Channel'));
		
		
	});
	
	ui.sidebar.addPalette('EIPLibrary', 'EIP - Message Construction', true, function(content) {
		content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/EventMessageIcon.gif', 100,100, 'EventMessage', 'Event Message', true));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/RequestReplyIcon.gif', 100,100, 'RequestReply', 'Request Reply', true));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/CorrelationIdentifierIcon.gif', 100,100, 'Correlation Identifier', 'Correlation Identifier', true));
		content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/ReturnAddressIcon.gif', 100,100, 'CorrelationIdentifier', 'ReturnAddress', true));
	});
	
	ui.sidebar.addPalette('EIPLibrary', 'EIP - Message Routing', true, function(content) {
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/MessageFilterIcon.gif', 100,100, 'Message Filter', 'Message Filter', true));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/DynamicRouterIcon.gif', 100,100, 'Dynamic Router', 'Dynamic Router', true));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/RecipientListIcon.gif', 100,100, 'Recipient List', 'Recipient List', true));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/SplitterIcon.gif', 100,100, 'Splitter', 'Splitter', true));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/AggregatorIcon.gif', 100,100, 'Aggregator', 'Aggregator', true));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/ResequencerIcon.gif', 100,100, 'Resequencer', 'Resequencer', true));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/DistributionAggregateIcon.gif', 100,100, 'Composed Message Processor', 'Composed Message Processor', true));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/RoutingTableIcon.gif', 100,100, 'Routing Slip', 'Routing Slip', true));
    });
	
	ui.sidebar.addPalette('EIPLibrary', 'EIP - Message Transformation', true, function(content) {
        
   
		
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/DataEnricherIcon.gif', 100,100, 'Data Enricher', 'Data Enricher', true));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/ContentFilterIcon.gif', 100,100, 'Content Filter', 'Content Filter', true));
		content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/StoreInLibraryIcon.gif', 100,100, 'Claim Check', 'Claim Check', true));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/NormalizerIcon.gif', 100,100, 'Normalizer', 'Normalizer', true));
    });
	
	ui.sidebar.addPalette('EIPLibrary', 'EIP - Messaging Endpoints', true, function(content) {
        
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/PollingConsumerIcon.gif', 100,100, 'PollingConsumer', 'PollingConsumer', true));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/EventDrivenConsumerIcon.gif', 100,100, 'Event Driven Consumer', 'Event Driven Consumer', true));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/CompetingConsumersIcon.gif', 100,100, 'Competing Consumers', 'Competing Consumers', true));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/MessageDispatcherIcon.gif', 100,100, 'Message Dispatcher', 'Message Dispatcher', true));
		content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/MessageSelectorIcon.gif', 100,100, 'Selective Consumer', 'Selective Consumer', true));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/DurableSubscriptionIcon.gif', 100,100, 'Durable Subscriber', 'Durable Subscriber', true));
		content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/TransactionalClientIcon.gif', 100,100, 'Transactional Client', 'Transactional Client', true));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/MessagingGatewayIcon.gif', 100,100, 'Messaging Gateway', 'Messaging Gateway', true));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/MessagingAdapterIcon.gif', 100,100, 'Service Activator', 'Service Activator', true));
    });
	
	ui.sidebar.addPalette('EIPLibrary', 'EIP - System Management', true, function(content) {
	    content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/DetourIcon.gif', 100,100, 'Detour', 'Detour', true));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/WireTapIcon.gif', 100,100, 'Wire Tap', 'Wire Tap', true));
		content.appendChild(ui.sidebar.createVertexTemplate('image;image=http://www.eaipatterns.com/img/ControlBusIcon.gif', 100,100, 'ControlBus', 'ControlBus', true));
    });

});
